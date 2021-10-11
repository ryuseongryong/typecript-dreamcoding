{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // RSR ver.
  // function printLoginState(resource: ResourceLoadState): void {
  //   switch (resource.state) {
  //     case 'loading':
  //       console.log('👀 loading...')
  //       break;
  //     case 'success':
  //       console.log(`😃 ${resource.response.body}`)
  //       break;
  //     case 'fail':
  //       console.log(`😱 ${resource.reason}`)
  //       break;
  //     default:
  //       throw new Error(`unknown resource: ${resource}`)
  //   }
  // }

  // Ellie ver.
  function printLoginState(state: ResourceLoadState): void {
    switch (state.state) {
      case 'loading':
        console.log('👀 loading...');
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
