import verbsData from '@/data/verbs.json'

export function Table() {
  const { headers, verbs } = verbsData

  return (
    <div className="w-full h-[calc(100vh-6rem)] overflow-auto">
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-2 py-2 text-left font-semibold text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {verbs.map((verb, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border hover:bg-muted/50">
              <td className="px-2 py-2 font-medium">
                <span className="text-sm">{verb.dutch}</span><br />
                <span className="text-sm text-gray-500">({verb.english})</span>
              </td>
              <td className="px-2 py-2 text-center">{verb.conjugations.ik}</td>
              <td className="px-2 py-2 text-center">{verb.conjugations.jij}</td>
              <td className="px-2 py-2 text-center">{verb.conjugations.hij}</td>
              <td className="px-2 py-2 text-center">{verb.conjugations.wij}</td>
              <td className="px-2 py-2 text-center">{verb.conjugations.jullie}</td>
              <td className="px-2 py-2 text-center">{verb.conjugations.zij}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
