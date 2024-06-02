class SocketSingleton {
    private socket: WebSocket | null = null;
    private static instance: SocketSingleton | null = null;
  
    public static getInstance(): SocketSingleton {
      if (!SocketSingleton.instance) {
        
        SocketSingleton.instance = new SocketSingleton();
        
      }
      return SocketSingleton.instance;
    }
  
    public connect(url: string): void {

      this.socket = new WebSocket(url);
      this.socket.onopen = () => {
        
        // Add  Your Logic When Socket Are Connected
      };
      this.socket.onmessage = (event) => {
        console.log('Data:', event.data);
        
      };
      this.socket.onclose = () => {
        console.log('disconnected');
      };
    }
    
    public send(message: string): void {
     
      
      if (this.socket && this.socket?.readyState != 0) {
        this.socket.send(message);
      } else {
        console.error('Socket is not connected.');
      }
    }
  
    public disconnect(): void {
      if (this.socket) {
        this.socket.close();
        this.socket = null;
      }
    }
  }
  
  
  export default SocketSingleton;
  