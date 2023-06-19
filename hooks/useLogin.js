import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { EndPointsContext } from '../contexts/EndPointsContext';
import { RoleContext } from '../contexts/UserContext';
import { AsyncStorage } from 'react-native'

export const useLogin = () => {
    const { urlState } = useContext(EndPointsContext);
    const { roleState } = useContext(RoleContext);
    const { authState } = useContext(AuthContext);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const httpConfig = (method, user) => {
        if(method === 'POST'){
            setConfig({
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user),
            })

            setMethod('POST');
        }
    }

    const logout = async (e) => {
        if(e){
            try{
                await AsyncStorage.removeItem('token');
                await AsyncStorage.removeItem('user');
                await AsyncStorage.removeItem('name');
                roleState[1](undefined);
                authState[1]('');
                return 0;
            }catch (error){
                console.log(error);
            }
        }
    }

    useEffect(() => {
        if(method === 'POST'){
            const login = async () => {
                setLoading(true);
                try{
                    let res = await fetch(`${urlState[0]}Users/login`, config);

                    let json = await res.json();

                    const token = json.message.token;

                    authState[1](token);

                    await AsyncStorage.setItem('token', JSON.stringify(token));
        
                    setError(null);
                } catch (error){
                    console.log(error);
                    setError(true);
                }
                setLoading(false)
            }
    
            login();
        }
    }, [method, roleState, config, urlState, authState]);

    return { httpConfig, logout, loading, error }
}