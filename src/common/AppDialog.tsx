
// import styless from './DialogComp.module.scss';

const AppDialog:React.FC<{
    dialogRef: any,
    title: string,
    classKey: string
}> = ({dialogRef, title, classKey}) => {
    return ( 
        <dialog id="dialogTest" ref={dialogRef}>
        <p id="ptag" className={'test'}>{title}</p>
        
          <button type="button" onClick={() => dialogRef.current.close()}>OK</button>
      
      </dialog>
    )
};

export default AppDialog;