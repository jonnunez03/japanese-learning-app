import { parseJmdictEntry } from "./parseEntry.js";

const xml = `
<entry>
  <ent_seq>1358280</ent_seq>

  <k_ele>
    <keb>飲む</keb>
    <ke_pri>ichi1</ke_pri>
  </k_ele>

  <r_ele>
    <reb>のむ</reb>
    <re_pri>ichi1</re_pri>
  </r_ele>

  <sense>
    <pos>verb</pos>
    <gloss>to drink</gloss>
  </sense>
</entry>
`;

const entry = parseJmdictEntry(xml);

console.log(JSON.stringify(entry, null, 2));

const complexXml = `
<entry>
  <ent_seq>9999999</ent_seq>

  <k_ele>
    <keb>開く</keb>
    <ke_pri>ichi1</ke_pri>
  </k_ele>

  <k_ele>
    <keb>空く</keb>
  </k_ele>

  <r_ele>
    <reb>あく</reb>
    <re_restr>開く</re_restr>
  </r_ele>

  <r_ele>
    <reb>すく</reb>
    <re_restr>空く</re_restr>
  </r_ele>

  <sense>
    <pos>verb</pos>
    <stagk>開く</stagk>
    <gloss>to open</gloss>
  </sense>

  <sense>
    <pos>verb</pos>
    <stagk>空く</stagk>
    <gloss>to become empty</gloss>
  </sense>
</entry>
`;

const complexEntry = parseJmdictEntry(complexXml);

console.log("\nComplex entry:");
console.log(JSON.stringify(complexEntry, null, 2));
