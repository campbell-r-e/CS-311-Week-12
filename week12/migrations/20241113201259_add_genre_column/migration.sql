-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "pubdate" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
