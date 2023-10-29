-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "dataCriado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizado" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "nome" TEXT,
    "sobrenome" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorito" (
    "id" SERIAL NOT NULL,
    "dataCriado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizado" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "link" TEXT NOT NULL,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("id")
);
