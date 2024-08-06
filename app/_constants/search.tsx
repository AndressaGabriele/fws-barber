// contantes, são variaveis que nunca mudam, apenas para aliviar e limpar o codigo jogamos ela para ca

interface QuickSearchOptions {
  imageUrl: string
  title: string
}

export const quickSearchOptions: QuickSearchOptions[] = [
  {
    imageUrl: "/cabelo.svg",
    title: "Cabelo",
  },
  {
    imageUrl: "/barba.svg",
    title: "Barba",
  },
  {
    imageUrl: "/acabamento.svg",
    title: "Acabamento",
  },
  {
    imageUrl: "/massagem.svg",
    title: "Massagem",
  },
  {
    imageUrl: "/sobrancelha.svg",
    title: "Sobrancelha",
  },
  {
    imageUrl: "/hidratacao.svg",
    title: "Hidratação",
  },
]
