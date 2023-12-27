import React from 'react';
import LateralLimiter from "@/app/components/LateralLimiter";
import { Logo } from "@/app/components/Logo";
import { Button } from "@/app/components/Button";

const actions = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Cursos", path: "/courses" },
  { label: "Artigos", path: "/articles" },
  { label: "Contato", path: "/contact" },
];

export default function MenuComponent() {
  return (
    <LateralLimiter>
      <div className="flex space-x-8 p-8 items-center">
        <Logo/>
        <div className="grow text-right">
          <ul className="flex float-right space-x-4 uppercase font-bold">
            { actions.map((action) => (
              <li key={ action.label }>
                <a href="#">{ action.label }</a>
              </li>
            )) }
          </ul>
        </div>
        <div>
          <Button>
            {/*<FontAwesomeIcon icon={faAngleRight}/>*/ }
            <div>icon</div>
            <div>
              Login
            </div>
          </Button>
        </div>
        <div className="border border-black p-2 rounded-full w-10 h-10 text-center">
          {/*<FontAwesomeIcon icon={faSearch}/>*/ }
          <div>icon</div>
        </div>
      </div>
    </LateralLimiter>
  )
}
