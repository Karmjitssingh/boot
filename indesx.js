let Users = [
    {
      fname: 'Karamjit',
      lname: 'Kaur',
      id: 1,
    },
    {
      fname: 'Karamjit',
      lname: 'Singh',
      id: 2,
    },
    {
      fname: 'Karamjit',
      lname: 'Maan',
      id: 3,
    },
    {
      fname: 'S. Karamjit',
      lname: 'Singh',
      id: 4,
    },
  ];
  let user=Users.filter(function(user){
return (user.fname+user.lname).includes("KarmjitSingh");

  })