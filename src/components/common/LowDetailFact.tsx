type Props = {
  id?: string;
  provider: string;
  date: string;
  amount: number;
  motive: string;
}

export const LowDetailFact = ({ provider, date, amount, motive }: Props) => (
  <div className="flex justify-between rounded-2xl bg-primary-gray p-3">
    <div className="flex flex-col">
      <span className="text-primary-blue font-bold">{provider}</span>
      <span className="text-black">{motive}</span>
    </div>
    <div className="flex flex-col items-end mt-3.5">
      <span className="text-primary-blue-dark text-2xl font-bold">
        {
          amount.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })
        }
      </span>
      <span className="text-secondary-gray font-bold">{date}</span>
    </div>
  </div>
)