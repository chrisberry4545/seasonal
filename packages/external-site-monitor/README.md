# Eat Seasonal - External site monitor

Used to monitor changes in external sites referenced by Eat Seasonal.

This is useful because it means I can update when recipes are changed or removed.

It works by using jest to take a snapshot of a part of every recipe page.
If some of the page is changed it gives me an indication that I should check if the recipe
still looks correct.

This is process in run on a regular schedule.
