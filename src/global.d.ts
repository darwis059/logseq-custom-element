interface LogseqApi {
  open_in_right_sidebar: (uuid: string) => void;
}

interface Logseq {
  api: LogseqApi;
}

interface Window {
  logseq: Logseq;
}

declare namespace logseq {
  const api: LogseqApi;
}
