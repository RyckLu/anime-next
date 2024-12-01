import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AnimeService } from "@/anime/anime.service";
import { GenerosService } from "@/generos/generos.service";
import { StudioService } from "@/studio/studio.service";

type FormData = {
  animeName: string;
  generoName: string;
  studioName: string;
};

const AddEntitiesPage = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await AnimeService.addAnime({ name: data.animeName });
      await GenerosService.addGenero({ name: data.genreName });
      await StudioService.addStudio({ name: data.studioName });

      alert("Dados adicionados com sucesso!");
      reset(); 
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Falha ao salvar os dados.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Adicionar Anime, Gênero e Estúdio</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "10px", maxWidth: "400px" }}>
        <label>
          Nome do Anime:
          <input type="text" {...register("animeName", { required: true })} />
        </label>
        <label>
          Nome do Gênero:
          <input type="text" {...register("generoName", { required: true })} />
        </label>
        <label>
          Nome do Estúdio:
          <input type="text" {...register("studioName", { required: true })} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddEntitiesPage;
