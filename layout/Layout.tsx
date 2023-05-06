import React, {FunctionComponent, useState} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header"

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className="wrapper">
            <Header/>
            <>
                {children}
            </>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {

    return function withLayoutComponent(props: T): JSX.Element {
        return (
                <Layout>
                    <Component {...props}/>
                </Layout>
        )
    }
}