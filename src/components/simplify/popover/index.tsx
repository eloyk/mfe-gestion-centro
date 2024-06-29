import { Input } from "@/components/input"
import { Label } from "@/components/ui/label"
import {
  Popover as Base,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Combobox } from "../combobox"
import { Button } from "@/components/ui/button"
 
export function Popover({children, title, dataSource=[], saveText="Agregar Docente", description, items, emptyMsg="", onSave}:any) {
  const getInput = (id:string, type:'input'|'combo', defaultValue="", value:string, onChange:any, placeholder:string, dataSource=[]) =>  {
    const inputByType = {
      disabled: <Input id={id} defaultValue={defaultValue} disabled value={value} onChange={onChange} className="col-span-2 h-8" />,
      input: <Input id={id} defaultValue={defaultValue} value={value} onChange={onChange} className="col-span-2 h-8" />,
      combo: <Combobox dataSource={dataSource} placeholder={placeholder} emptyMsg={emptyMsg} className={"col-span-2"} value={value} onSelect={onChange}/>
    }
    return inputByType[type]
  }
  return (
    <Base>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-85">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{title}</h4>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="grid gap-2">
            {
              items.map((item: any) =>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">{item.title}</Label>
                  <>{getInput(item.id, item.type, "", item.value, item.onChange, item.placeholder, item.dataSource)}</>
                </div>
              )
            }
            <div className="grid grid-cols-3 items-center gap-4">
            <button className='col-span-3 outline-btn-primary whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 text-xs h-8' onClick={onSave}>{saveText}</button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Base>
  )
}