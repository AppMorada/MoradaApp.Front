import Link from "next/link";

export default function CondominiumRegisterPage() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <img src="/assets/images/brand/logo.svg" alt="Logo MoradaApp" width={268} height={98} />
            <form className="mt-[70px]">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col w-[443px] h-[67px] bg-background-contrast py-2 px-4 rounded-lg">
                        <label className="font-extrabold">Nome de usuário administrador</label>
                        <input className="bg-background-contrast outline-none font-medium" type="text" placeholder='Insira o nome do usuário' />
                    </div>  
                    
                    <div className="flex flex-col w-[443px] h-[67px] bg-background-contrast py-2 px-4 rounded-lg">
                        <label className="font-extrabold">CNPJ</label>
                        <input className="bg-background-contrast outline-none font-medium" type="text" placeholder='XXX.XXX.XXX/0001-XX' />
                    </div>
                
                    <div className="flex flex-col w-[443px] h-[67px] bg-background-contrast py-2 px-4 rounded-lg">
                        <label className="font-extrabold">E-mail</label>
                        <input className="bg-background-contrast outline-none font-medium" type="email" placeholder='Insira seu e-mail' />
                    </div>
                
                    <div className="flex flex-col w-[443px] h-[67px] bg-background-contrast py-2 px-4 rounded-lg">
                        <label className="font-extrabold">Senha</label>
                        <input className="bg-background-contrast outline-none font-medium" type="password" placeholder='Insira sua senha' />
                    </div>

                    <div className="flex flex-col w-[443px] h-[67px] bg-background-contrast py-2 px-4 rounded-lg">
                        <label className="font-extrabold">Nome do Condomínio</label>
                        <input className="bg-background-contrast outline-none font-medium" type="password" placeholder='Insira o nome do condomínio' />
                    </div>

                    <div className="flex flex-col w-[443px] h-[67px] bg-background-contrast py-2 px-4 rounded-lg">
                        <label className="font-extrabold">Endereço</label>
                        <input className="bg-background-contrast outline-none font-medium" type="password" placeholder='Insira o endereço do condomínio' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-8">
                    <button className="bg-primary h-12 w-[442px] rounded-lg text-background font-extrabold" type="submit">Confirmar Cadastro</button>
                    <div className="flex gap-1 m-4">
                        <span className="font-medium">Já possui uma conta?</span><Link className="font-medium text-primary" href="#">Faça o login</Link>
                    </div>
                </div>
            </form>
        </section>
    )
}
