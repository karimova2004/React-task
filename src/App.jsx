import React from "react";
import CustomButton from "./CustomButton";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <CustomButton text="Adi düymə" />

      <CustomButton
        text="warnMessage "
        warnMessage="Bu bir xəbərdarlıq mesajıdır!"
      />

      <CustomButton
        text="hint"
        hint="Bu düymə bir ipucu göstərir"
      />
    </div>
  );
};

export default App;
