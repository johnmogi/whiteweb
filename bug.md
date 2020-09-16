  componentDidUpdate() {
          if(this.state.buffer === false){
              return
            }
            else{ 
                console.log("componentDidUpdate?")
            fetch(API)
            .then(response => response.json())
            .then(contacts => this.setState({ contacts }))
            this.setState({buffer: false});
}
      }

       this.setState({buffer: false});

                       buffer:true
