// place files you want to import through the `$lib` alias in this folder.
globalThis.makeblock=e=>b.Xml.appendDomToWorkspace((new DOMParser).parseFromString(`<block type="${e}" />`,"text/xml"),bb);