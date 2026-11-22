package com.murfsterboy.coffeepilot;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.LinkAddress;
import android.net.LinkProperties;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.view.WindowManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.net.Inet4Address;

/**
 * CoffeePilot native helpers:
 *  - netInfo: the phone's IPv4 address on Wi-Fi, so the app knows which network it is on
 *    and which addresses to search for the Shellys
 *  - keepAwake: keep the screen on while the app is open
 *  - shareText: send the shot log CSV to the Android share sheet
 */
@CapacitorPlugin(name = "CoffeeNative")
public class CoffeeNativePlugin extends Plugin {

    @PluginMethod
    public void netInfo(PluginCall call) {
        JSObject r = new JSObject();
        try {
            ConnectivityManager cm = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
            Network pick = null;
            boolean wifi = false;
            if (cm != null) {
                for (Network n : cm.getAllNetworks()) {
                    NetworkCapabilities nc = cm.getNetworkCapabilities(n);
                    if (nc != null && (nc.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)
                            || nc.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET))) {
                        pick = n;
                        wifi = true;
                        break;
                    }
                }
                if (pick == null) pick = cm.getActiveNetwork();
            }
            LinkProperties lp = (cm == null || pick == null) ? null : cm.getLinkProperties(pick);
            if (lp != null) {
                for (LinkAddress la : lp.getLinkAddresses()) {
                    if (la.getAddress() instanceof Inet4Address && !la.getAddress().isLoopbackAddress()) {
                        r.put("ip", la.getAddress().getHostAddress());
                        r.put("prefix", la.getPrefixLength());
                        break;
                    }
                }
            }
            r.put("wifi", wifi);
        } catch (Exception e) {
            r.put("error", String.valueOf(e.getMessage()));
        }
        call.resolve(r);
    }

    @PluginMethod
    public void keepAwake(final PluginCall call) {
        final boolean on = Boolean.TRUE.equals(call.getBoolean("on", true));
        getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (on) getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                else getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void shareText(PluginCall call) {
        String title = call.getString("title", "CoffeePilot");
        Intent send = new Intent(Intent.ACTION_SEND);
        send.setType("text/plain");
        send.putExtra(Intent.EXTRA_SUBJECT, title);
        send.putExtra(Intent.EXTRA_TEXT, call.getString("text", ""));
        Intent chooser = Intent.createChooser(send, title);
        chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getContext().startActivity(chooser);
        call.resolve();
    }
}
