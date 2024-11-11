import React, { useState } from 'react';

function App() {
  const [binaryResult, setBinaryResult] = useState('');
  const [conversionExplanation, setConversionExplanation] = useState('');

  // Función para convertir texto a binario
  const handleTextConversion = () => {
    const text = prompt('Ingrese el texto a convertir:');
    if (!text) return;

    const binary = text.split('').map(char => {
      const binary = char.charCodeAt(0).toString(2);
      return '0'.repeat(8 - binary.length) + binary;
    }).join(' ');

    setBinaryResult(binary);
    setConversionExplanation(
      `Proceso de conversión de texto:\n
      1. Cada carácter se convierte a su código ASCII
      2. El código ASCII se convierte a binario
      3. Se asegura que cada byte tenga 8 bits
      4. Ejemplo para '${text[0]}': 
         - Código ASCII: ${text.charCodeAt(0)}
         - Binario: ${text.charCodeAt(0).toString(2)}`
    );
  };

  // Función para convertir audio a binario
  const handleAudioConversion = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        const buffer = await blob.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        
        const binary = Array.from(bytes.slice(0, 8))
          .map(byte => byte.toString(2).padStart(8, '0'))
          .join(' ');

        setBinaryResult(binary);
        setConversionExplanation(
          `Proceso de conversión de audio:\n
          1. Captura de audio como stream
          2. Conversión a ArrayBuffer
          3. Conversión de bytes a binario
          4. Cada sample de audio se convierte a 8 bits
          5. Mostrando primeros 8 bytes del audio`
        );
      };

      mediaRecorder.start();
      setTimeout(() => mediaRecorder.stop(), 3000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  // Función para convertir documento a binario
  const handleDocumentConversion = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      
      const binary = Array.from(bytes.slice(0, 8))
        .map(byte => byte.toString(2).padStart(8, '0'))
        .join(' ');

      setBinaryResult(binary);
      setConversionExplanation(
        `Proceso de conversión de documento:\n
        1. Lectura del archivo como ArrayBuffer
        2. Conversión a Uint8Array
        3. Conversión de bytes a representación binaria
        4. Cada byte se convierte a 8 bits
        5. Mostrando primeros 8 bytes del archivo
        Nombre del archivo: ${file.name}
        Tamaño: ${file.size} bytes`
      );
    };
    input.click();
  };

  const IconFileText = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );

  const IconMic = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  );

  const IconFileCode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="m10 13-2 2 2 2"/>
      <path d="m14 17 2-2-2-2"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Convertidor de Datos a Binario
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={handleTextConversion}
            className="flex flex-col items-center justify-center p-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            <IconFileText />
            <span className="mt-2">Texto a Binario</span>
          </button>

          <button
            onClick={handleAudioConversion}
            className="flex flex-col items-center justify-center p-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            <IconMic />
            <span className="mt-2">Audio a Binario</span>
          </button>

          <button
            onClick={handleDocumentConversion}
            className="flex flex-col items-center justify-center p-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
          >
            <IconFileCode />
            <span className="mt-2">Documento a Binario</span>
          </button>
        </div>

        {binaryResult && (
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Resultado en Binario:
              </h2>
              <div className="font-mono text-sm break-all bg-white p-4 rounded border border-slate-200">
                {binaryResult}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Explicación del Proceso:
              </h2>
              <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-white p-4 rounded border border-slate-200">
                {conversionExplanation}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
