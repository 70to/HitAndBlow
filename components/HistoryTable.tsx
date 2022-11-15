const people = [
    { name: '256', title: '1', email: '0' },
    { name: '256', title: '1', email: '0' },
    { name: '256', title: '1', email: '0' },
    { name: '256', title: '1', email: '0' },
]

export default function HistoryTable() {
    return (
        <div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-xl font-semibold text-gray-900 sm:pl-6">
                                        Guess
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-xl font-semibold text-gray-900">
                                        HIT
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-xl font-semibold text-gray-900">
                                        BLOW
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3  text-xl font-medium text-gray-900 sm:pl-6">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4  text-xl text-gray-500">{person.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4  text-xl text-gray-500">{person.email}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
