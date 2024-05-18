type Person = {
  premium?: boolean; // The premium property is optional and can be boolean or undefined
};

function checkPremiumStatus(personObj: Person): boolean {
  // If personObj.premium is undefined, it will default to false
  return personObj.premium ?? false;
}

// Usage
const personObj: Person = { /* ... */ };
const isPremiumUser = checkPremiumStatus(personObj);
