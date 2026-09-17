import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      {loading ? (
        <View style={styles.loader}>
          <Text style={styles.brand}>Vaultline<Text style={styles.dot}>.</Text></Text>
          <ActivityIndicator color="#2463eb" size="small" />
          <Text style={styles.caption}>Loading secure wallet workspace…</Text>
        </View>
      ) : null}
      <WebView
        source={require('./vaultline.html')}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
        onLoadEnd={() => setLoading(false)}
        onError={() => setLoading(false)}
        style={[styles.webview, loading && styles.hidden]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#eef3f8' },
  webview: { flex: 1, backgroundColor: '#eef3f8' },
  hidden: { opacity: 0 },
  loader: { ...StyleSheet.absoluteFillObject, zIndex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eef3f8', gap: 14 },
  brand: { color: '#18211f', fontSize: 32, fontWeight: '800', letterSpacing: -1.4 },
  dot: { color: '#2463eb' },
  caption: { color: '#718096', fontSize: 12 },
});
