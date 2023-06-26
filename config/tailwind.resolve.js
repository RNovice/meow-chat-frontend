import resolveConfig from "tailwindcss/resolveConfig";
import myConfig from "../tailwind.config";

​const tailwindConfig = resolveConfig(myConfig);

export {tailwindConfig}