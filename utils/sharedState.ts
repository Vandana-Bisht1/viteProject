// utils/sharedState.ts
class SharedState {
  private data: { [key: string]: any } = {};

  set(key: string, value: any) {
    this.data[key] = value;
  }

  get(key: string): any {
    return this.data[key];
  }

  clear(key: string) {
    delete this.data[key];
  }
}

const sharedState = new SharedState();
export default sharedState;
