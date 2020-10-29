import React from 'react'

export const Title = ({name, title}) => {
    return (
        <div className="row mr-0">
            <div className="col-10 mx-auto my-2 text-title text-center">
                <h1 className="text-uppercase font-weight-bold">
                    {name}
                        <strong className="ml-3 text-blue">
                            {title}
                        </strong>
                </h1>
            </div>
        </div>
    )
}
