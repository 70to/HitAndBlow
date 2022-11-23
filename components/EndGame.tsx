import {Fragment, useCallback, useState, VoidFunctionComponent} from 'react'
import {Dialog, Transition} from "@headlessui/react";

type Props = {
    correctNumber: string
    isCorrect: boolean;
    turn: number,
};

const EndGame: VoidFunctionComponent<Props> = ({correctNumber, isCorrect, turn}) => {
    let [isOpen, setIsOpen] = useState(true)
    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    return (
        <>
            {isOpen &&
                <Transition.Root show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={onOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div
                                className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel
                                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                        <div>
                                            {isCorrect && <div className="text-center">
                                                <Dialog.Title as="h3"
                                                              className="text-3xl font-bold leading-6 text-green-600">
                                                    🎉 WIN 🎉
                                                </Dialog.Title>
                                                <div className="mt-4">
                                                    <p className="text-3xl text-center text-slate-500 text-left mb-2">
                                                        {correctNumber}
                                                    </p>
                                                </div>
                                            </div>
                                            }
                                            {!isCorrect && <div className="text-center">
                                                <Dialog.Title as="h3"
                                                              className="text-3xl font-bold leading-6 text-red-600">
                                                    ☠ ️LOSE ☠
                                                </Dialog.Title>
                                                <div className="mt-4">
                                                    <p className="text-3xl text-center text-slate-500 text-left mb-2">
                                                        {correctNumber}
                                                    </p>
                                                </div>
                                            </div>
                                            }
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:text-sm"
                                                onClick={() => window.location.reload()}>
                                                もう一度
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            }
        </>
    )
}
export default EndGame