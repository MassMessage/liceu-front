'use client'

export const InputFile = () => {
    return (
        <div className="bg-[#F5F5F5] flex items-center h-[75px] px-4 py-2 font-bold relative" onClick={() => document.getElementById('file')?.click()} >
            <input type="file" id='file' className="hidden" />
            <span className="line-clamp-1">Aula 2 - Clube Dos Cincoaaaaa aaaaa aaaaaaaaa a a a a  a a a a</span>
        </div>
    )
}