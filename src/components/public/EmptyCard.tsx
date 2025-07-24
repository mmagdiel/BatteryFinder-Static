const EmptyCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/20">
      <div className="mb-4">
        <h3 className="font-bold text-primary">No se encontraron baterias</h3>
        <p className="text-gray-700">
          <span className="font-bold text-gray-900">
            Aunque se tiene asociado las siguiente referencias
          </span>
        </p>
      </div>
    </div>
  );
};

export { EmptyCard };
