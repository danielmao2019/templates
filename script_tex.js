MathJax.Hub.Config({
  TeX: {
    Macros: {
      "floor": ["\\left\\lfloor #1 \\right\\rfloor", 1],
      "ceil": ["\\left\\lceil #1 \\right\\rceil", 1],
      "setuni": "\\cup",
      "setint": "\\cap",
      "biguni": "\\bigcup",
      "bigint": "\\bigcap",
      "ran": "\\operatorname{ran}",
      // number theory
      "ord": "\\operatorname{ord}",
      "dlog": "\\operatorname{dlog}",
      "lcm": "\\operatorname{lcm}",
      "legendre": ["\\left(\\frac{#1}{#2}\\right)_{L}", 2],
      "jacobi": ["\\left(\\frac{#1}{#2}\\right)_{J}", 2],
      // complexity theory
      "encoding": ["\\langle #1 \\rangle", 1],
      "P": "\\mathsf{P}",
      "NP": "\\mathsf{NP}",
      "EXP": "\\mathsf{EXP}",
      "time": "\\mathsf{TIME}",
      "ntime": "\\mathsf{NTIME}",
      "space": "\\mathsf{SPACE}",
      "nspace": "\\mathsf{NSPACE}",
      "pspace": "\\mathsf{PSPACE}",
      "npspace": "\\mathsf{NPSPACE}",
      "L": "\\mathsf{L}",
      "NL": "\\mathsf{NL}",
      "coNL": "\\mathsf{coNL}",
      "polyl": "\\mathsf{PolyL}",
      "poly": "\\mathsf{poly}",
      "connected": "\\mathsf{CONNECTED}",
      // complexity theory - boolean functions
      "addr": "\\operatorname{ADDR}",
    }
  }
});
