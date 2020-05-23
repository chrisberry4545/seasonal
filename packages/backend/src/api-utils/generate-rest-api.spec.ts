import {
  Router,
  Response,
  Request
} from 'express';
import { generateRestApi } from './generate-rest-api';
import * as get404Error from './get-404-error';
import * as get500Error from './get-500-error';
import * as getError from './get-error';
import { ISeasonalBackendError } from '../interfaces';
import * as uuidParamValidation from '../middleware/uuid-param-validation';

describe('generateRestApi', () => {
  let mockRouter: Router;
  let mockRouterGet: jest.Mock;
  let mockRouterPost: jest.Mock;
  let mockRouterPatch: jest.Mock;
  let mockRouterDelete: jest.Mock;
  let mockResponseJson: jest.Mock;
  let mockNext: jest.Mock;
  let response: Response;
  const request = {
    params: {
      id: 'id'
    } as any
  } as Request;
  const mock500Error = {
    status: 500
  } as ISeasonalBackendError;
  const mock404Error = {
    status: 404
  } as ISeasonalBackendError;
  const mockGetError = {
    status: 400
  } as ISeasonalBackendError;
  const mockUuidParamValidation = () => null;

  beforeEach(() => {
    jest.spyOn(
      uuidParamValidation, 'uuidParamValidation'
    ).mockReturnValue(mockUuidParamValidation);
    jest.spyOn(get404Error, 'get404Error')
      .mockReturnValue(mock404Error);
    jest.spyOn(get500Error, 'get500Error')
      .mockReturnValue(mock500Error);
    jest.spyOn(getError, 'getError')
      .mockReturnValue(mockGetError);
    mockResponseJson = jest.fn();
    response = {
      json: mockResponseJson as any
    } as Response;
    mockNext = jest.fn();
    mockRouterGet = jest.fn();
    mockRouterPost = jest.fn();
    mockRouterPatch = jest.fn();
    mockRouterDelete = jest.fn();
    mockRouter = {
      delete: mockRouterDelete as any,
      get: mockRouterGet as any,
      patch: mockRouterPatch as any,
      post: mockRouterPost as any
    } as Router;
  });

  describe('when getAll is set', () => {
    let mockGetAll: jest.Mock;

    describe('when getAll returns a value', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockGetAll = jest.fn().mockReturnValue(result);
        generateRestApi({
          getAll: mockGetAll
        }, mockRouter);
        await mockRouterGet.mock.calls[0][1](null, response, mockNext);
      });

      test('adds the route', () => expect(mockRouterGet.mock.calls[0][0]).toBe('/'));

      test('returns the result of getAll', () =>
        expect(mockResponseJson).toHaveBeenCalledWith(result));

    });

    describe('when getAll errors', () => {
      const error = new Error('failed');
      beforeEach(async () => {
        mockGetAll = jest.fn().mockRejectedValue(error);
        generateRestApi({
          getAll: mockGetAll
        }, mockRouter);
        await mockRouterGet.mock.calls[0][1](null, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

  });

  describe('when getOne is set', () => {
    let mockGetOne: jest.Mock;

    describe('when getAll returns a value', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockGetOne = jest.fn().mockReturnValue(result);
        generateRestApi({
          getOne: mockGetOne
        }, mockRouter);
        await mockRouterGet.mock.calls[0][2](request, response, mockNext);
      });

      test('adds the route', () => expect(mockRouterGet.mock.calls[0][0]).toBe('/:id'));

      test('sets uuid validation', () =>
        expect(mockRouterGet.mock.calls[0][1]).toBe(mockUuidParamValidation));

      test('returns the result of getOne', () =>
        expect(mockResponseJson).toHaveBeenCalledWith(result));

    });

    describe('when uuid validation is disabled', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockGetOne = jest.fn().mockReturnValue(result);
        generateRestApi({
          getOne: mockGetOne,
          idsAreUUIDs: false
        }, mockRouter);
        await mockRouterGet.mock.calls[0][2](request, response, mockNext);
      });

      test('does not set any validation', () =>
        expect(mockRouterGet.mock.calls[0][1]).toHaveLength(0));

    });

    describe('when getOne errors', () => {
      const error = new Error('failed');
      beforeEach(async () => {
        mockGetOne = jest.fn().mockRejectedValue(error);
        generateRestApi({
          getOne: mockGetOne
        }, mockRouter);
        await mockRouterGet.mock.calls[0][2](request, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

  });

  describe('when create is set', () => {
    let mockCreate: jest.Mock;
    const createRequest = {
      body: {}
    } as Request;

    describe('when create returns a value', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockCreate = jest.fn().mockReturnValue(result);
        generateRestApi({
          create: mockCreate
        }, mockRouter);
        await mockRouterPost.mock.calls[0][1](createRequest, response, mockNext);
      });

      test('adds the route', () => expect(mockRouterPost.mock.calls[0][0]).toBe('/'));

      test('returns the result of create', () =>
        expect(mockResponseJson).toHaveBeenCalledWith(result));

    });

    describe('when no item to create is included', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockCreate = jest.fn().mockReturnValue(result);
        generateRestApi({
          create: mockCreate
        }, mockRouter);
        await mockRouterPost.mock.calls[0][1]({
          ...createRequest,
          body: null
        }, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mockGetError));

    });

    describe('when create errors', () => {
      const error = new Error('failed');
      beforeEach(async () => {
        mockCreate = jest.fn().mockRejectedValue(error);
        generateRestApi({
          create: mockCreate
        }, mockRouter);
        await mockRouterPost.mock.calls[0][1](createRequest, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

  });

  describe('when edit is set', () => {
    let mockEdit: jest.Mock;
    const editRequest = {
      body: {}
    } as Request;

    describe('when edit returns a value', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockEdit = jest.fn().mockReturnValue(result);
        generateRestApi({
          edit: mockEdit
        }, mockRouter);
        await mockRouterPatch.mock.calls[0][1](editRequest, response, mockNext);
      });

      test('adds the route', () => expect(mockRouterPatch.mock.calls[0][0]).toBe('/'));

      test('returns the result of edit', () =>
        expect(mockResponseJson).toHaveBeenCalledWith(result));

    });

    describe('when no item to edit is included', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockEdit = jest.fn().mockReturnValue(result);
        generateRestApi({
          edit: mockEdit
        }, mockRouter);
        await mockRouterPatch.mock.calls[0][1]({
          ...editRequest,
          body: null
        }, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mockGetError));

    });

    describe('when edit errors', () => {
      const error = new Error('failed');
      beforeEach(async () => {
        mockEdit = jest.fn().mockRejectedValue(error);
        generateRestApi({
          edit: mockEdit
        }, mockRouter);
        await mockRouterPatch.mock.calls[0][1](editRequest, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

  });

  describe('when delete is set', () => {
    let mockDelete: jest.Mock;

    describe('when delete returns a value', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockDelete = jest.fn().mockReturnValue(result);
        generateRestApi({
          deleteOne: mockDelete
        }, mockRouter);
        await mockRouterDelete.mock.calls[0][2](request, response, mockNext);
      });

      test('adds the route', () => expect(mockRouterDelete.mock.calls[0][0]).toBe('/:id'));

      test('sets uuid validation', () =>
        expect(mockRouterDelete.mock.calls[0][1]).toBe(mockUuidParamValidation));

      test('returns the result of edit', () =>
        expect(mockResponseJson).toHaveBeenCalledWith(result));

    });

    describe('when uuid validation is disabled', () => {
      const result = {} as any;
      beforeEach(async () => {
        mockDelete = jest.fn().mockReturnValue(result);
        generateRestApi({
          deleteOne: mockDelete,
          idsAreUUIDs: false
        }, mockRouter);
        await mockRouterDelete.mock.calls[0][2](request, response, mockNext);
      });

      test('does not set any validation', () =>
        expect(mockRouterDelete.mock.calls[0][1]).toHaveLength(0));

    });

    describe('when delete errors', () => {
      const error = new Error('failed');
      beforeEach(async () => {
        mockDelete = jest.fn().mockRejectedValue(error);
        generateRestApi({
          deleteOne: mockDelete
        }, mockRouter);
        await mockRouterDelete.mock.calls[0][2](request, response, mockNext);
      });

      test('sends an error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

  });

});
