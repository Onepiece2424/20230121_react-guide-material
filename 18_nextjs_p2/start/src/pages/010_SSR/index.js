import { useState, useEffect } from 'react'

export default function SSR({ message }) {

  const [state, setState] = useState('bye');
  console.log(message)
  console.log('hello')
  const val = 0

  useEffect(() => {
    console.log('useEffect')
    window.localStorage.setItem('key', 'value')
    document.cookie = 'val=0; path=/;'
  }, [])

  return <h3>{state}</h3>
}

export async function getServerSideProps(context) {

  const { cookie } = context.req.headers;
  console.log('cookie', cookie);
  console.log('getServerSideProps is executed');

  return {
    // redirect: {
    //   destination: '/',
    //   // permanent: false
    // },
    props: { message: 'From Server Side Props'}
  }
}
