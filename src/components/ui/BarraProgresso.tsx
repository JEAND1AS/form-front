const steps = ['Cadastrando estudante', 'Filiação', 'Responsável financeiro', 'Informações adicionais', 'Finalizado'];

export default function BarraProgresso({ currentStep }: { currentStep: number }) {
  const percentual = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="w-full mb-8">
      <div className="relative h-2 rounded-full bg-gray-200">
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${percentual}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
        {steps.map((step, index) => (
          <div key={index} className={`text-center w-1/5 ${index <= currentStep ? 'text-blue-600' : 'text-gray-600 font-bold'}`}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
