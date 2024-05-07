const Lista = (props) => {
  return(
    <li class="relative flex w-[95%] items-center justify-center gap-2.5 border-b-2 px-3 py-3.5 hover:border-gray-400">
        <input type="checkbox" id={props.id} class="peer relative h-5 w-5 shrink-0 appearance-none" />
        <label for={props.id} class="w-full  cursor-pointer font-medium text-white peer-checked:text-gray-400 peer-checked:line-through">
          {props.text}
           </label>

        <td>
        </td>

      </li>
  )

}

export default Lista