# Lab 5 - Starter

James Fleming

Sites at [expose](https://james-fleming12.github.io/Lab5_Starter/expose.html) and [explore](https://james-fleming12.github.io/Lab5_Starter/explore.html)

# Explore:

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

No. Unit tests are for testing single, encapsulated pieces of logic in isolation. Since sending a message from one user to another involves many parts interacting together testing it requires an end-to-end test.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Yes, since validating if a string is over or under 80 characters is the scale for a unit test.