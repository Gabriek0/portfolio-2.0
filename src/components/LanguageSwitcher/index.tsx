import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const languageOptions = [
  {
    name: "PT π§π·",
    value: "pt-BR",
  },
  {
    name: "EN  πΊπΈ",
    value: "en-US",
  },
];

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <Select
      w="fit-content"
      border="none"
      cursor="pointer"
      focusBorderColor="none"
      onChange={(event) => {
        i18n.changeLanguage(event.target.value);
      }}
    >
      {languageOptions.map((language) => (
        <option
          key={language.value}
          style={{
            background: "#121212",
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
          value={language.value}
        >
          {language.name}
        </option>
      ))}
    </Select>
  );
};
