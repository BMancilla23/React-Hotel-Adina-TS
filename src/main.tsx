import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { RoomProvider } from '@context/RoomContext.tsx';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RoomProvider>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</RoomProvider>
);
