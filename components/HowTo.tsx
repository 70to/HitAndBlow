import {Fragment, useCallback, useState} from 'react'
import {Dialog, Transition} from "@headlessui/react";
import {NUMBER_SIZE, ROW_SIZE} from "../constants";

const HowTo = () => {
    let [isOpen, setIsOpen] = useState(true)

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    return (
        <>
            <div
                className="cursor-pointer"
                onClick={onOpen}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            {isOpen &&
                <Transition.Root show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                        <div>
                                            <div className="text-center">
                                                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-slate-900">
                                                    遊び方
                                                </Dialog.Title>
                                                <div className="mt-4">
                                                    <p className="text-sm text-slate-500 text-left mb-2">
                                                        0~10までのランダムな{NUMBER_SIZE}桁の数字を当てるだけのシンプルなゲームです。 {ROW_SIZE}回の間に当てることができれば勝ち、できなければ負け。<br/>
                                                    </p>
                                                    <p className="text-sm text-slate-500 text-left mb-2.5">
                                                        Hit → 桁の位置も数字も同じ<br/>
                                                        Blow → 桁の位置は違うけれど数字は同じ<br/>
                                                    </p>
                                                    <p className="text-sm text-slate-500 text-left">
                                                        PCのみ対応しています。<br/>
                                                        キーボードで数字を入力してEnterでGuess
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                ゲームをはじめる
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
export default HowTo