export default function Filter() {
  const [selected, setSelected] = useState("politics");
  return (
    <>
      <div className="p-3 flex gap-1 ">
        <label> Filter</label>
        <select
          className="bg-white border-2   text-black "
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="politics"> politics</option>
          <option value="finance">finance</option>
          <option value="health">health</option>
          <option value="technology"> technology</option>
          <option value="geopolitics">geopolitics</option>
        </select>
      </div>
    </>
  );
}
