


const Folder = ({files}) => {
  



 return(
        <div>
            <div>
                {
                    files.isFolder ? (
                    <button>
                        {">"}
                    </button>
                    ): null 
                }
                {files.name}
            </div>
            {
                 files.isFolder &&
                files.children.map((exp) => (
                    <div style={{paddingLeft: '20px'}}>
                        <Folder files={exp} />
                   </div>
                ))
            }
        </div>
    )
}

export default Folder;