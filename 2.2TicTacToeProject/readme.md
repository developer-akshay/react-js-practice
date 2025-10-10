- Whenever we are re-using C then basically new isolated instance is created. Therfore C works in isolation, change in one C won't be reflected is other same reused C

# Update Object state Immutably

- Objects & arrays are reference values in JS
- We should therefore not mutate them directly - instead create a deep copy 1st
