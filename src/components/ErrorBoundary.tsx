import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMsg: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMsg: ''
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error bound:', error, errorInfo);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-[80svh] flex flex-col items-center justify-center text-center px-6">
          <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
            <AlertCircle size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Unexpected Render Error
          </h2>
          <p className="text-slate-600 mb-8 max-w-md">
            The application experienced a network or routing error attempting to load this sequence.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
          >
            Reload Website
          </button>
        </div>
      );
    }

    return (this.props as any).children || null;
  }
}

export default ErrorBoundary;
