interface GptMessagePros {
  userScore: number;
  errors: string[];
  message: string;
}

export const GptOrthographyMessage = ({
  userScore,
  errors,
  message,
}: GptMessagePros) => {
  // Make sure to receive `text` as a prop
  console.log(userScore, errors, message);

  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flow-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600">
          G
        </div>
        <div className="relative ml-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
          <h3> puntaje: {userScore} % </h3>
          <p> {message} </p>

          {errors?.length === 0 ? (
            <p>No se encontraron errores, Perfecto</p>
          ) : (
            <>
              <h3 className="text-2xl">Errores encosntrados</h3>
              <ul>
                {errors?.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
