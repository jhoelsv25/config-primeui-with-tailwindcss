export const generatePalette = (baseColor: string) => {
  return {
    50: `{${baseColor}.50}`,
    100: `{${baseColor}.100}`,
    200: `{${baseColor}.200}`,
    300: `{${baseColor}.300}`,
    400: `{${baseColor}.400}`,
    500: `{${baseColor}.500}`,
    600: `{${baseColor}.600}`,
    700: `{${baseColor}.700}`,
    800: `{${baseColor}.800}`,
    900: `{${baseColor}.900}`,
    950: `{${baseColor}.950}`,
  };
};
