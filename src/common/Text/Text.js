import React from 'react'

export default function Text(props) {

    return (
        <React.Fragment>
            <p
                className={props.class}
                style={{
                    fontFamily: !!props.fontFamily ? 'Roboto Condensed' : 'Roboto Condensed',
                    fontWeight: props.fontWeight,
                    fontSize: props.fontSize,
                    color: props.fontColor
                }}
            >
                {props.text}
            </p>
        </React.Fragment>
    )
}
