const myCustomButton = {
    borderRadius: "md",
    textDecoration: "underline",
    fontSize: { base: "1.1rem", md: "1.3rem" },
    fontWeight: { base: 400, md: 450 },
    color: "white",
    // Add any other CSS properties you want to customize here
};

const BoxHeading = {
    color:"red",
    lineHeight:1.2, 
    textAlign: "center", 
    //  fontSize:{ base: "2.5rem", md: "3rem" } ,
    //  fontWeight : { base: 500, md: 700 },
    //   color :  "white"
    fontSize: ["2.5rem","3rem"], // Use an array for responsive fontSize
  fontWeight: [500, 700],
  };

export  {myCustomButton,BoxHeading} ;