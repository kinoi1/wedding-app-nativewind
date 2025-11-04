import { View } from 'lucide-react-native';
import { StyleSheet, SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f5f5f5"
  },
});
