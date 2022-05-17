import { useEffect, useRef, useState } from "react"


export const useFetch = (url, options,activado,setActivado) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        if (activado) {
            fetch(url, options)
                .then(resp => resp.json())
                .then(data => {
                    if (!isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                        //console.log('usefetch se llamo')
                    } //else (console.log('usefetch no se llamo'))
                }).catch(() => {
                    setState({
                        data: null,
                        loading: false,
                        error: 'No se puede cargar la informacion'
                    })
                });
                setActivado(false);
        }
    }, [activado]);

    return state;


}