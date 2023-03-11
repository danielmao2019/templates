MathJax.Hub.Config({
  TeX: {
    Macros: {
      "floor": ["\\left\\lfloor #1 \\right\\rfloor", 1],
      "ceil": ["\\left\\lceil #1 \\right\\rceil", 1],
      "setuni": "\\cup",
      "setint": "\\cap",
      "biguni": "\\bigcup",
      "bigint": "\\bigcap",
      // number theory
      "ord": "\\operatorname{ord}",
      "dlog": "\\operatorname{dlog}",
      "lcm": "\\operatorname{lcm}",
      "legendre": ["\\left(\\frac{#1}{#2}\\right)_{L}", 2],
      "jacobi": ["\\left(\\frac{#1}{#2}\\right)_{J}", 2],
      // complexity theory
      "P": "\\mathsf{P}",
      "NP": "\\mathsf{NP}",
      "EXP": "\\mathsf{EXP}",
      "time": "\\mathsf{TIME}",
      "space": "\\mathsf{SPACE}",
      "pspace": "\\mathsf{PSPACE}",
      "npspace": "\\mathsf{NPSPACE}",
    }
  }
});
