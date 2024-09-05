/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#02A28F",
        secondary: "#616161",
      },
      backgroundImage: {
        "first-content":
          "url('https://s3-alpha-sig.figma.com/img/cce8/50e5/98e266707f8ec4ed9dc3e8c36b7667dc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cl3rQJoBGa6haPPb2BSRi2i0gRGMOeXcm6TafbwFGYoW2q3ZqSv8~8utiCfjPpA0QOL33HpzPY0-CGPBti-089ZrHIpIzPMxWb~Bhk9trJvfjX92NxtEK8HlKT3f~Jl645QICWPom1LO3RlYNwoJKCG6GrrDGa-npLy3MmTfpItFDOusHxvkVaPWTsrq48bSRwJeQAuaFQb4jdbjp5YqljHGYBRRKjPMZdlvfcBJVC8tv0u3WOO2c8PLStoFrEQlz4G-jgQiryQPTxMi3atdOjdT3jNribp4zcrzgRtvQx~BqqtaYfcsawRcOPp3pRu5kB4xFzcB4fkXul1TCSIc7A__')",
      },
    },
  },
};
